"use client";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import QuestionsSection from "./_components/QuestionsSection";
import RecordAnswerSection from "./_components/RecordAnswerSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function StartInterview({ params }) {
  const [interviewId, setInterviewId] = useState();
  const [interviewData, setInterviewData] = useState();
  const [mocInterviewQuestion, setMocInterviewQuestion] = useState();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      setInterviewId(resolvedParams.interviewId);
      GetInterviewDetails(resolvedParams.interviewId);
    };

    fetchParams();
  }, [params]);

  /**
   * Used to Get Interview Details by Interview ID
   */

  const GetInterviewDetails = async (id) => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mocId, id));
    // console.log(result);

    const jsonMockResp = JSON.parse(result[0].jsonMOckResp);
    console.log(jsonMockResp);

    setMocInterviewQuestion(jsonMockResp);
    setInterviewData(result[0]);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Questions */}
        <QuestionsSection
          mocInterviewQuestion={mocInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
        />
        {/* Video/ Audio Recording */}
        <RecordAnswerSection
          mocInterviewQuestion={mocInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
          interviewData={interviewData}
        />
      </div>
      <div className="flex justify-end gap-6 pb-5">
        {activeQuestionIndex > 0 && (
          <Button
            onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
          >
            Previous Question
          </Button>
        )}
        {activeQuestionIndex !== mocInterviewQuestion?.length - 1 && (
          <Button
            onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
          >
            Next Question
          </Button>
        )}

        {activeQuestionIndex == mocInterviewQuestion?.length - 1 && (
          <Link href={`/dashboard/interview/${interviewData?.mocId}/feedback`}>
            <Button>End Interview</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default StartInterview;
