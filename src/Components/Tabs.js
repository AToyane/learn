import React, { useState, useEffect } from "react";
import clsx from "clsx";


export default function Tabs() {
 return (
<nav class="border-b text-sm flex justify-start">
    <a class="inline-block px-4 py-2 text-gray-700 hover:text-black" href="#">Tab 1</a>

    <a class="inline-block px-4 py-2 border-b-2 border-indigo-600 text-indigo-600 font-semibold" href="#">Tab 2</a>

    <a class="inline-block px-4 py-2 text-gray-700 hover:text-black" href="#">Tab 3</a>
    <a class="inline-block px-4 py-2 text-gray-700 hover:text-black" href="#">Tab 4</a>
  </nav>
 );
 }


 