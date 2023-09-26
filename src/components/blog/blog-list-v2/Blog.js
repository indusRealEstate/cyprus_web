"use client";
import { blogDataTwo } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Blog = () => {
  const [blogData, setBlogData] = useState();

  const getAllBlogs = async () => {
    const response = await axios.get("https://indusmanagement.ae/api/pages/blogs/getAllBlogs.php");
    setBlogData(response.data);
  }

  useEffect(() => {
    getAllBlogs();
  }, [])

  return (
    <>
      {blogData != undefined ? blogData.properties.map((item, index) => (
        <div
          className="blog-style1 list-style bgc-white d-block d-md-flex align-items-xl-center"
          key={index}
        >
          <div className="blog-img flex-shrink-0">
            <Image
              width={280}
              height={240}
              priority
              className="cover"
              src={item.image}
              alt="blog"
            />
            <div className="date">
              <span className="month">{item.month}</span>
              <span className="day">{item.day}</span>
            </div>
          </div>
          <div className="blog-content pl30 pb20 flex-grow-1">
            <a className="tag" href="#">
              {item.category}
            </a>
            <h4 className="title mt-1 mb20">
              <Link href={`/blogs/${item.id}`}>{item.title}</Link>
            </h4>
            <p className="text mb0">{item.content}</p>
          </div>
        </div>
      )) : ""}
    </>
  );
};

export default Blog;
