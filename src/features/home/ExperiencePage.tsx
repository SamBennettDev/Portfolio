import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { experienceConfig } from "@/config/experience";
import { CircleIcon } from "lucide-react";

export function ExperiencePage() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col items-center justify-center md:gap-[50px] max-w-[720px]">
        {experienceConfig.map((experience) => {
          return (
            <div key={experience.company_name} className="flex">
              <Card className="hidden md:block border-none h-auto">
                <CardHeader className="flex flex-nowrap flex-row items-center">
                  <CircleIcon className="h-5 text-muted-foreground" />
                  <div className="px-2"></div>
                  <CardDescription className="text-muted-foreground w-[70px]">
                    {experience.to}
                    <br />
                    {experience.from}
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-0 md:border-l-2">
                <CardHeader>
                  <CardTitle>
                    <div>{experience.title}</div>
                  </CardTitle>
                  <CardDescription className="flex justify-between">
                    <div>{experience.company_name}</div>
                    <div className="flex md:hidden ">
                      {experience.from} - {experience.to}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="ml-4 list-disc [&>li]:mt-2">
                    {experience.points.map((point, index) => {
                      return <li key={index}>{point}</li>;
                    })}
                  </ul>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
