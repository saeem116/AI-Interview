"use client";
import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/GeminiAIModal";
import { LoaderCircle } from "lucide-react";
import { MockInterview } from "@/utils/schema";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { db } from "@/utils/db";
import { useRouter } from "next/navigation";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobExperience, setJobExperience] = useState();
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const router = useRouter();
  const { user } = useUser();

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(jobPosition, jobDesc, jobExperience);

    const InputPrompt = `Job Position: ${jobPosition}, Job Description: ${jobDesc}, Years of Experience: ${jobExperience}, Depends on this information please give us ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT} Interview Question with JSON Formet, Give Question and Answered as a field in JSON.`;

    const result = await chatSession.sendMessage(InputPrompt);
    const MockJsonResp = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");

    const mockresp = JSON.parse(MockJsonResp);

    console.log(mockresp);
    setJsonResponse(MockJsonResp);

    if (MockJsonResp) {
      const resp = await db
        .insert(MockInterview)
        .values({
          mocId: uuidv4(),
          jsonMOckResp: MockJsonResp,
          jobPosition: jobPosition,
          jobDesc: jobDesc,
          jobExperience: jobExperience,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format("DD-MM-yyyy"),
        })
        .returning({ mocId: MockInterview.mocId });

      console.log("Inserted ID:", resp);

      if (resp) {
        setOpenDialog(false);
        router.push(`dashboard/interview/${resp[0]?.mocId}`);
      }
    } else {
      console.log("error");
    }
    setLoading(false);
  };

  return (
    <div>
      <div
        className="p-10  border rounded-lg bg-slate-300 hover:scale-105 hover:shadow-md cursor-pointer transition-all "
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="font-bold text-lg text-center "> +Add new </h2>
      </div>

      <Dialog open={openDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell us about your job Interview
            </DialogTitle>
            <DialogDescription>
              Add details about your job position/role, Job description and
              years of experience.
            </DialogDescription>
            <form onSubmit={onSubmit}>
              <div className="mt-7 my-2">
                <label>Job Role/Job position</label>
                <Input
                  placeholder="Ex. Full Stuck Developer"
                  required
                  onChange={(e) => setJobPosition(e.target.value)}
                />
              </div>
              <div className="my-3">
                <label>Job Description/ Tech Stuck (In Short)</label>
                <Textarea
                  placeholder="Ex. React, Angular, Python, NodeJS, MySQL"
                  required
                  onChange={(e) => setJobDesc(e.target.value)}
                />
              </div>
              <div className="my-3">
                <label>Years of Experience</label>
                <Input
                  placeholder="Ex.5"
                  type="number"
                  max="50"
                  required
                  onChange={(e) => setJobExperience(e.target.value)}
                />
              </div>
              <div className="flex gap-5 justify-end ">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setOpenDialog(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? (
                    <>
                      <LoaderCircle className="animate-spin" />
                      "Generating form AI"
                    </>
                  ) : (
                    "Start Interview"
                  )}
                </Button>
              </div>
            </form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
