import fs from "fs";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { EleventyRenderPlugin } from "@11ty/eleventy";
import metagen from 'eleventy-plugin-metagen';
import pluginRss from "@11ty/eleventy-plugin-rss";


export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/img");

    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(metagen);
    eleventyConfig.addPlugin(pluginRss);

    eleventyConfig.setBrowserSyncConfig({
        middleware: [
            function(req, res, next) {
                if (/^[^.]+$/.test(req.url)) {
                    res.setHeader('Content-Type', 'text/html; charset=utf-8');
                }
                next();
            }
        ]
    });
};