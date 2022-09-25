
import React from "react";
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import graphql from '../assets/graphql.png'
import tailwind from '../assets/tailwind.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import node from '../assets/node.png'
import express from '../assets/express.png'
import mongo from '../assets/mongo.png'
import bootstrap from '../assets/bootstrap.png'
import jquery from '../assets/jquery.png'
import handlebars from '../assets/handlebars.png'
import mysql from '../assets/mysql.png'


export const Experience = function() {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactImage,
            title: 'React',
            style: 'shadow-cyan-400'
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: nextjs,
            title: 'Next JS',
            style: 'shadow-gray-100'
        },
        {
            id: 7,
            src: graphql,
            title: 'GraphQL',
            style: 'shadow-pink-400'
        },
        {
            id: 6,
            src: git,
            title: 'Git',
            style: 'shadow-red-500'
        },
        {
            id: 7,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-500'
        },
        {
            id: 8,
            src: node,
            title: 'Node',
            style: 'shadow-lime-300'
        },
        {
            id: 9,
            src: express,
            title: 'Express',
            style: 'shadow-zinc-600'
        },
        {
            id: 10,
            src: mongo,
            title: 'MongoDB',
            style: 'shadow-green-400'
        },
        {
            id: 11,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-600'
        },
        {
            id: 12,
            src: jquery,
            title: 'jQuery',
            style: 'shadow-sky-700'
        },
        {
            id: 13,
            src: handlebars,
            title: 'Handlebars',
            style: 'shadow-yellow-800'
        },
        {
            id: 14,
            src: mysql,
            title: 'MySQL',
            style: 'shadow-cyan-500'
        },
    ]

    return (
        <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full py-[200px]">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>

                <div className="w-full grid grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

                    {
                        techs.map(element => {
                            return (
                                <div key={element.id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${element.style}`}>
                                    <img src={element.src} className="w-20 mx-auto"/>
                                    <p className="mt-4">{element.title}</p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}