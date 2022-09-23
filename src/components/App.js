
import React from "react";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { SocialLinks } from "./SocialLinks";



export const App = function() {
    return (
        <div>
            <Navbar />

            <Home />

            <SocialLinks />
        </div>
    )
}