//Page principal na tela
"use client"

import { QuestionItem } from "@/components/QuestionItem";
import { QuizComplet } from "@/components/QuizComplet";
import { Results } from "@/components/Results";
import { questions } from "@/data/questions";
import { useState } from "react";


const Page = () => {
  return (
     <QuizComplet />
      );
}
export default Page;