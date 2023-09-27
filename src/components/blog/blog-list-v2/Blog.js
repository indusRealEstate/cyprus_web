"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Blog = ( { blogs } ) =>
{
  // const [ blogData, setBlogData ] = useState();
  // const [ month, setMonth ] = useState();
  // const [ day, setMDay ] = useState();

  // useEffect( () =>
  // {
  //   if ( prop != undefined )
  //   {
  //     setBlogData( prop )

  //   }
  //   console.log( "Blog" + prop );

  // }, [] )

  console.log( blogs )

  return (
    <>
      {
        blogs == undefined ?
          <Box
            sx={ {
              display: "flex",
              height: "10rem",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            } }
          >
            <CircularProgress size={ 40 } />
          </Box>
          :

          blogs.map( ( item, index ) => (

            <div
              className="blog-style1 list-style bgc-white d-block d-md-flex align-items-xl-center"
              key={ index }
            >
              <div className="blog-img flex-shrink-0">
                <Image
                  width={ 280 }
                  height={ 240 }
                  priority
                  className="cover"
                  src={ item.preview_image }
                  alt="blog"
                />
                <div className="date">
                  <span className="month">{ new Date( item.date ).toDateString().split( ' ' )[ 1 ] }</span>
                  <span className="day">{ new Date( item.date ).getDate() }</span>
                </div>
              </div>
              <div className="blog-content pl30 pb20 flex-grow-1">
                <a className="tag" href="#">
                  { item.blog_category }
                </a>
                <h4 className="title mt-1 mb20">
                  <Link href={ `/blogs/${item.id}` }>{ item.title }</Link>
                </h4>
                <p className="text mb0">{ item.blog_preview_content }</p>
              </div>
            </div>
          ) )
      }

    </>
  );
};

export default Blog;
