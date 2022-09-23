import { PlayIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

export default function Category({
  img,
  des,
  icon,
  title,
  titleDes,
  courses,
  series,
}) {
  return (
    <div className="w-11/12 py-7 px-10 bg-gray-50 rounded-md mt-6">
      {/* Header */}
      <CategoryHeader
        icon={icon}
        title={title}
        titleDes={titleDes}
        courses={courses}
        series={series}
      />

      {/* Body */}
      <div className="w-full grid gap-10 md:grid-cols-2 py-10 border-b">
        <div className="flex flex-col justify-center">
          <p>{des}</p>
          <p className="mt-10 capitalize">
            Level: <b>Beginner to advance</b>
          </p>
          <Link to="/categories">
            <button className="bg-primary py-4 px-8 text-white rounded-md mt-5">
              Learn More
            </button>
          </Link>
        </div>
        <div>
          <img src={img} className="w-full" alt="body-image" />
        </div>
      </div>

      {/* Series */}
      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center mt-10">
          <img
            src="/img/calender.png"
            className="h-20 mr-5 mb-5 lg:mb-0"
            alt="calender-icon"
          />
          <div>
            <h1 className="text-lg font-bold">Series</h1>
            <p className="capitalize">our best japanese learning series</p>
          </div>
        </div>
        <Series
          level="Beginner"
          seriesCourses="Two"
          seriesImg="/img/Ellipse 46.png"
        />
        <Series
          level="Beginner"
          seriesCourses="Two"
          seriesImg="/img/Ellipse 47.png"
        />
        <Series
          level="Beginner"
          seriesCourses="Two"
          seriesImg="/img/Ellipse 48.png"
        />
        <Series
          level="Beginner"
          seriesCourses="Two"
          seriesImg="/img/Ellipse 49.png"
        />
        <Series
          level="Beginner"
          seriesCourses="Two"
          seriesImg="/img/Ellipse 50.png"
        />
      </div>
    </div>
  );
}

function CategoryHeader({ icon, title, titleDes, courses, series }) {
  return (
    <div className="w-full grid lg:grid-cols-2">
      <div className="flex flex-col lg:flex-row items-start lg:items-center">
        <img
          src={icon}
          className="h-20 mr-5 mb-5 lg:mb-0"
          alt="category-icon"
        />
        <div>
          <h1 className="text-lg font-bold">{title}</h1>
          <p className="text-sm">
            {titleDes}
          </p>
        </div>
      </div>
      <div className="flex items-center mt-3 lg:mt-0 justify-between lg:justify-end">
        <div className="flex items-center flex-col text-center">
          <h1 className="text-xl font-bold">{courses}</h1>
          <h1>Courses</h1>
        </div>
        <div className="flex items-center flex-col lg:ml-16 text-center">
          <h1 className="text-xl font-bold">{series}</h1>
          <h1>Series</h1>
        </div>
        <div className="bg-gray-100 cursor-pointer hover:bg-gray-200 lg:ml-16 mt-3 lg:mt-0 h-16 w-16 rounded-full flex items-center justify-center">
          <PlayIcon className="h-7 text-secondary" />
        </div>
      </div>
    </div>
  );
}

function Series({ seriesImg, level, seriesCourses }) {
  return (
    <div className="w-full grid lg:grid-cols-2 border-b">
      <div className="flex flex-col lg:flex-row items-start lg:items-center py-7 mt-5">
        <img
          src={seriesImg}
          className="h-20 mr-5 mb-5 lg:mb-0"
          alt="Series Image"
        />
        <div>
          <h1 className="text-lg font-bold">Master Hiragana & Katakana</h1>
          <p className="">
            The Japanese written language is composed of three writing systems:
            kanji, hiragana, and katakana.
          </p>
        </div>
      </div>
      <div className="flex items-center mt-3 lg:mt-0 justify-between lg:justify-end">
        <div className="flex items-center flex-col text-center">
          <h1 className="text-xl font-bold">Level</h1>
          <h1>{level}</h1>
        </div>
        <div className="flex items-center flex-col lg:ml-16 text-center">
          <h1 className="text-xl font-bold">Courses</h1>
          <h1>{seriesCourses}</h1>
        </div>
        <div className="bg-gray-100 cursor-pointer hover:bg-gray-200 lg:ml-16 mt-3 lg:mt-0 h-16 w-16 rounded-full flex items-center justify-center">
          <PlayIcon className="h-7 text-secondary" />
        </div>
      </div>
    </div>
  );
}
