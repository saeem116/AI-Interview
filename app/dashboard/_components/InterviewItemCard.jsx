import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function InterviewItemCard({ interview }) {
  const router = useRouter();
  const onStart = () => {
    router.push(`/dashboard/interview/${interview?.mocId}`);
  };

  const onFeedbackPress = () => {
    router.push(`/dashboard/interview/${interview.mocId}/feedback`);
  };

  return (
    <div className="border shadow-sm rounded-lg p-3">
      <h2 className="font-bold text-black">{interview?.jobPosition}</h2>
      <h2 className="text-sm text-gray-600">
        {interview?.jobExperience}
        <span> Years of Experience</span>
      </h2>
      <h2 className="text-xs text-gray-400">
        <span>Created At:</span> {interview?.createdAt}
      </h2>

      <div className="flex justify-between mt-2 gap-5">
        <Button
          size="sm"
          variant="outline"
          className="w-full"
          onClick={onFeedbackPress}
        >
          Feedback
        </Button>

        <Button size="sm" className="w-full" onClick={onStart}>
          Start
        </Button>
      </div>
    </div>
  );
}

export default InterviewItemCard;
