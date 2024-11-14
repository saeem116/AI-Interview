"use client";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { ChevronsUpDown, Frown, PartyPopper, SmilePlus } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function Feedback({ params }) {
  const [interviewId, setInterviewId] = useState();
  const [feedbackList, setFeedbackList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      setInterviewId(resolvedParams.interviewId);
      GetFeedback(resolvedParams.interviewId);
    };

    fetchParams();
  }, [params]);

  const GetFeedback = async (id) => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mocIdRef, id))
      .orderBy(UserAnswer.id);

    console.log(result);
    setFeedbackList(result);
  };

  return (
    <div className="p-10">
      {feedbackList?.length == 0 ? (
        <div className="border rounded-lg p-4 sm:p-5 md:p-6 bg-red-100 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-4 md:mb-6 mx-auto">
          <h2 className="font-bold text-base sm:text-lg md:text-xl flex gap-2 items-center text-red-500">
            No interview feedback record found <Frown />
          </h2>
        </div>
      ) : (
        <>
          <div className="border rounded-lg p-5 sm:p-6 md:p-8 bg-green-100 w-full max-w-md md:max-w-lg lg:max-w-2xl mb-4 md:mb-6 mx-auto">
            <h2 className="font-bold text-xl sm:text-2xl md:text-3xl flex gap-2 items-center text-green-700">
              <PartyPopper />
              Congratulations
            </h2>
            <h2 className="text-md sm:text-lg md:text-xl font-bold flex gap-2 items-center text-green-700">
              Here is your interview feedback <SmilePlus />
            </h2>
          </div>

          <h2 className="text-violet-900 text-lg my-3">
            Your overall interview rating: <strong>7/10</strong>
          </h2>
          <h2 className="text-sm text-gray-500">
            Below, you'll find each interview question along with the correct
            answer, your response, and personalized feedback for improvement.
          </h2>
          {feedbackList &&
            feedbackList.map((item, index) => (
              <Collapsible key={index} className="mt-7">
                <CollapsibleTrigger className="p-2 bg-slate-300 rounded-lg flex justify-between my-2 text-left ">
                  {item.question} <ChevronsUpDown className="ps-2 h-5 w-5" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-red-500 p-2 border rounded-lg">
                      <strong>Rating: </strong>
                      {item.rating}
                    </h2>
                    <h2 className="bg-red-50 p-2 border rounded-lg text-sm text-red-900">
                      <strong>Your Answer:</strong>
                      {item.userAns}
                    </h2>
                    <h2 className="bg-green-50 p-2 border rounded-lg text-sm text-green-900">
                      <strong>Correct Answer:</strong>
                      {item.correctAns}
                    </h2>
                    <h2 className="bg-purple-100 p-2 border rounded-lg text-sm text-purple-900">
                      <strong>Feedback:</strong>
                      {item.feedback}
                    </h2>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
        </>
      )}

      <Button onClick={() => router.replace("/dashboard")}>GO HOME</Button>
    </div>
  );
}

export default Feedback;
