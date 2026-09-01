import fs from "fs";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { EleventyRenderPlugin } from "@11ty/eleventy";
import metagen from 'eleventy-plugin-metagen';
import pluginRss from "@11ty/eleventy-plugin-rss";


export default function(eleventyConfig) {
    // Only the images production pages actually reference — source art
    // (.pxd/.psd, unused PNGs/SVGs) stays out of the deployed site.
    eleventyConfig.addPassthroughCopy("assets/img/favicon.ico");
    eleventyConfig.addPassthroughCopy("assets/img/apple-touch-icon.png");
    eleventyConfig.addPassthroughCopy("assets/img/social.jpg");
    eleventyConfig.addPassthroughCopy("assets/fonts");

    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(metagen);
    eleventyConfig.addPlugin(pluginRss);
};