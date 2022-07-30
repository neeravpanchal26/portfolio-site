import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
const htmlToText = require("html-to-text");
import moment from "moment";

const cssVariables = (varName) => {
  const css = getComputedStyle(document.documentElement);
  return css.getPropertyValue(varName).replace(/ /g, "");
};

export const printResume = (props) => {
  const {
    firstName,
    lastName,
    email,
    telephone,
    location,
    gitProfileLink,
    linkedInLink,
    jobTitle,
    description,
  } = props.personalInfo;

  let education = [];
  let work = [];
  let skills = [];
  let eduCount = 0;
  let workCount = 0;

  props.events
    .sort(function (a, b) {
      return new Date(b.eventFrom) - new Date(a.eventFrom);
    })
    .map((event) => {
      let {
        eventTo,
        eventFrom,
        title,
        eventNameTwo,
        eventType,
        eventDescription,
        eventIcon,
      } = event;
      if (eventIcon != "work" && eduCount != 2) {
        education.push(
          {
            text: eventNameTwo,
            style: ["h2", "b"],
          },
          {
            text: title,
          },
          {
            text:
              moment(eventFrom).format("YYYY") +
              " - " +
              moment(eventTo).format("YYYY") +
              " • " +
              eventType,
            style: ["i", "black"],
          },
          { text: "\n" }
        );
        eduCount++;
      } else if (eventIcon === "work" && workCount != 3) {
        if (eventTo === null) {
          eventTo = "PRESENT";
        } else {
          eventTo = moment(eventTo).format("MMMM YYYY");
        }
        work.push(
          { text: eventNameTwo, style: ["h2", "b"] },
          { text: title },
          {
            text:
              moment(eventFrom).format("MMMM YYYY") +
              " - " +
              eventTo +
              " • " +
              eventType,
            style: ["i", "black"],
          },
          {
            text: htmlToText.fromString(eventDescription, {
              wordwrap: 200,
            }),
            style: ["p"],
          },
          { text: "\n" }
        );
        workCount++;
      }
    });

  props.skills.map((skill) => {
    skills.push({ text: skill.title });
  });

  const docDefinition = {
    pageSize: "A4",
    pageMargins: new Array(4).fill(25),
    content: [
      {
        text: firstName + " " + lastName,
        style: ["title", "b", "primaryFontColor"],
      },
      {
        text: jobTitle,
        style: ["h1", "b", "black"],
      },
      {
        text: htmlToText.fromString(description, {
          wordwrap: 200,
        }),
        style: ["p"],
      },
      { text: "\n" },
      {
        canvas: [
          {
            type: "line",
            x1: 0,
            y1: 0,
            x2: 545,
            y2: 0,
            lineWidth: 1,
            style: ["primaryFontColor"],
          },
        ],
      },
      {
        layout: "noBorders",
        table: {
          width: new Array(2).fill("*"),
          body: [
            [
              [
                {
                  text: "Contact",
                  style: ["h1", "b", "primaryFontColor"],
                },
                [
                  email,
                  telephone,
                  location,
                  linkedInLink,
                  gitProfileLink,
                  { text: "\n" },
                ],
                { text: "Education", style: ["h1", "b", "primaryFontColor"] },
                education,
                {
                  text: "Skills",
                  style: ["h1", "b", "primaryFontColor"],
                },
                skills,
              ],
              [
                {
                  text: "Work Experience",
                  style: ["h1", "b", "primaryFontColor"],
                },
                work,
              ],
            ],
          ],
        },
      },
    ],
    styles: {
      title: {
        fontSize: 24,
      },
      h1: {
        fontSize: 20,
      },
      h2: {
        fontSize: 16,
      },
      p: {
        fontSize: 12,
      },
      b: {
        bold: true,
      },
      i: {
        italics: true,
      },
      primaryFontColor: {
        color: cssVariables("--color-1"),
      },
      primaryBgColor: {
        background: cssVariables("--color-1"),
      },
      black: {
        color: cssVariables("--black"),
      },
      white: {
        color: cssVariables("--text-white"),
      },
      alignR: {
        alignment: "right",
      },
    },
  };
  console.log(docDefinition);
  pdfMake.createPdf(docDefinition).open();
};
