"use client";

import courseData from "@/data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import { Course } from "@/types";

const FeaturedCourse = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured,
  );

  return (
    <div className="bg-gray-900 py-12">
      <div>
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wider text-teal-600 uppercase">
            Featured Courses
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="mx-auto grid max-w-[80vw] grid-cols-1 justify-center gap-8 sm:grid-cols-2 lg:max-w-full lg:grid-cols-3">
          {featuredCourses.map((course: Course) => {
            return (
              <div key={course.id} className="flex justify-center">
                <BackgroundGradient className="flex h-full max-w-sm flex-col overflow-hidden rounded-[22px] bg-white dark:bg-zinc-900">
                  <div className="flex flex-grow flex-col items-center p-4 sm:p-6">
                    <p className="mt-4 mb-2 text-lg text-black sm:text-xl dark:text-neutral-200">
                      {course.title}
                    </p>
                    <p className="flex-grow text-sm text-neutral-600 dark:text-neutral-400">
                      {course.description}
                    </p>
                    <Link href={`/courses/${course.slug}`}>Learn More</Link>
                  </div>
                </BackgroundGradient>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link
          className="rounded border border-neutral-600 bg-white px-4 py-2 text-neutral-700 transition duration-200 hover:bg-gray-100"
          href={"/courses"}
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourse;
