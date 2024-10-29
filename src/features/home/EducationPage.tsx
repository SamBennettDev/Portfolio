import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { educationConfig } from "@/config/education";
import { Link } from "react-router-dom";

export const EducationPage = () => {
  return (
    <div className="w-full bg-card">
      <div className="flex justify-center items-center">
        {educationConfig.map((edu) => {
          return (
            <div
              className="flex flex-col md:flex-row justify-center items-center w-full max-w-[720px]"
              key={edu.school_name}
            >
              <div className="flex justify-center items-center h-full w-full pb-[1rem] md:pb-0 md:w-1/4 md:mr-5">
                <img src={edu.school_seal} className="h-[100px] w-[100px]" />
              </div>
              <Card className="md:border-t-0 md:border-l-2 pt-[1rem] md:pt-0">
                <CardHeader>
                  <CardTitle>
                    {edu.degree} in {edu.major}
                  </CardTitle>
                  <CardDescription className="flex flex-col">
                    <div>{edu.school_name}</div>
                    <div>{edu.to}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="ml-4 list-disc [&>li]:mt-2">
                    <li>Web/Mobile Development Track</li>
                    <li>
                      Dean’s List Fall 2020, Fall 2022, Fall 2023, Spring 2024
                    </li>
                    <li>
                      Relevant Coursework: Web Development, Human AI Alignment,
                      Computer Security, Scientific Computing
                    </li>
                  </ul>
                </CardContent>
                <CardContent></CardContent>
                <CardContent>
                  <Link
                    to={
                      "https://drive.google.com/file/d/1rbd6hKaRg4MhWkxwvBk5fplpKDXiyQdC/view?usp=sharing"
                    }
                    target="_blank"
                    className="w-full flex justify-center md:justify-start"
                  >
                    <Button variant={"outline"}>My Transcript</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};
