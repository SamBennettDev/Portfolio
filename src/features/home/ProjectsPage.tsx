import { Gallery } from "@/components/Gallery";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { projectConfig } from "@/config/projects";
import { Link } from "react-router-dom";

export function ProjectsPage() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-wrap w-full md:max-w-[1100px] gap-5 justify-center">
        {projectConfig.map((project) => {
          return (
            <div
              key={project.name}
              className="flex tems-center justify-center h-[250px] w-[350px] relative"
            >
              <Card className="absolute top-0 left-0 border md:border-0 md:border-l w-full h-full bg-card/95">
                <CardHeader>
                  <CardTitle className="flex justify-between content-center">
                    {project.name}
                    <div className="flex gap-[15px]">
                      <Link
                        to={project.source_code_link}
                        target="_blank"
                        className="md:opacity-75 hover:opacity-100"
                      >
                        <project.icon className="h-6 w-6"></project.icon>
                      </Link>

                      <Gallery images={project.images}></Gallery>
                    </div>
                  </CardTitle>
                  <CardDescription className="flex gap-3">
                    {project.tags.map((tag, index) => {
                      return (
                        <div className={tag.color} key={index}>
                          {tag.name}
                        </div>
                      );
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent>{project.description}</CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
