import javascriptCodingQuestions from './01-javascript-coding-questions.json';
import reactCodingQuestions from './02-react-coding-questions.json';
import javascriptQuizzes from './03-javascrpt-quizzes.json';
import reactQuizzes from './04-react-quizzes.json';
import typeScriptPuzzles from './05-typescript-puzzles.json';
import cssQuestions from './06-css-questions.json';
import frontendInterviewQuestions from './07-frontend-interview-questions.json';
import frontendSystemDesign from './08-frontend-system-design.json';

const data = [
    {
        order: 1,
        title: "JavaScript Coding Questions",
        key: "javascript-coding-questions",
        data: javascriptCodingQuestions,
        length: javascriptCodingQuestions.length,
        resolvedLength: 1,
    },
    {
        order: 2,
        title: "React Coding Questions",
        key: "react-coding-questions",
        data: reactCodingQuestions,
        length: reactCodingQuestions.length,
    },
    {
        order: 3,
        title: "JavaScript Quizzes",
        key: "javascript-quizzes",
        data: javascriptQuizzes,
        length: javascriptQuizzes.length,
    },
    {
        order: 4,
        title: "React Quizzes",
        key: "react-quizzes",
        data: reactQuizzes,
        length: reactQuizzes.length,
    },
    {
        order: 5,
        title: "TypeScript Puzzles",
        key: "typescript-puzzles",
        data: typeScriptPuzzles,
        length: typeScriptPuzzles.length,
    },
    {
        order: 6,
        title: "CSS Questions",
        key: "css-questions",
        data: cssQuestions,
        length: cssQuestions.length,
    },
    {
        order: 7,
        title: "Frontend Interview Questions",
        key: "frontend-interview-questions",
        data: frontendInterviewQuestions,
        length: frontendInterviewQuestions.length,
    },
    {
        order: 8,
        title: "Frontend System Design",
        key: "frontend-system-design",
        data: frontendSystemDesign,
        length: frontendSystemDesign.length,
    },
];

export default data;