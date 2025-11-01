import React, { useState, useEffect, useRef } from 'react';
import classes from './styles.module.scss';

const CodeAnimation: React.FC = () => {
    const codeLines = [
    '// 👋 Welcome to my world of design and code!',
    'const developer = {',
    '    name: "Alex Sandor",',
    '    role: "UI Developer & App Designer",',
    '    focus: ["Frontend", "App Design", "Creative Tools"],',
    '    stack: ["JavaScript", "React", "Python", "Swift", "SwiftUI", "Figma"],',
    '    passion: "Building clean, intuitive user interfaces that feel effortless to use.",',
    '};',
    '',
    'const greet = (dev) => {',
    '    console.log(`Hello, I’m ${dev.name} — a ${dev.role}.`);',
    '    console.log("I design and build apps that blend creativity with technology.");',
    '};',
    '',
    'greet(developer);',
    '',
    'function favoriteTools() {',
    '    console.log("✨ My toolbox includes:");',
    '    developer.stack.forEach(tool => console.log(` - ${tool}`));',
    '}',
    '',
    'favoriteTools();',
    '',
    'class Project {',
    '    constructor(name, description, tech) {',
    '        this.name = name;',
    '        this.description = description;',
    '        this.tech = tech;',
    '    }',
    '',
    '    showcase() {',
    '        console.log(`🚀 ${this.name}: ${this.description}`);',
    '        console.log(`Built with: ${this.tech.join(", ")}`);',
    '    }',
    '}',
    '',
    'const projects = [',
    '    new Project("Atlas UI Kit", "A minimalist design system for web and mobile interfaces.", ["Figma", "React"]),',
    '    new Project("Swift Notes", "A simple yet elegant note-taking app built with SwiftUI.", ["Swift", "SwiftUI"]),',
    '    new Project("TaskFlow", "A productivity dashboard powered by modern frontend tech.", ["React", "Python"]),',
    '];',
    '',
    'console.log("\\n🧩 My Projects:");',
    'projects.forEach(p => p.showcase());',
    '',
    'console.log("\\n💡 Each project reflects my belief that good design and solid code go hand in hand.");',
    'console.log("I’m always exploring new tools and ideas to make digital experiences smoother and smarter.");'
];


    const [displayedText, setDisplayedText] = useState('');
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const preRef = useRef<HTMLPreElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentLineIndex < codeLines.length) {
                const currentLine = codeLines[currentLineIndex];
                if (currentCharIndex < currentLine.length) {
                    setDisplayedText(prev => prev + currentLine[currentCharIndex]);
                    setCurrentCharIndex(prev => prev + 1);
                } else {
                    setDisplayedText(prev => prev + '\n');
                    setCurrentLineIndex(prev => prev + 1);
                    setCurrentCharIndex(0);
                }
            } else {
                // Reset to loop the animation
                setDisplayedText('');
                setCurrentLineIndex(0);
                setCurrentCharIndex(0);
            }
        }, 20); // Typing speed

        return () => clearTimeout(timer);
    }, [currentLineIndex, currentCharIndex, codeLines]);

    useEffect(() => {
        if (preRef.current) {
            const pre = preRef.current;
            pre.scrollTop = pre.scrollHeight - pre.clientHeight;
        }
    }, [displayedText]);

    return (
        <div className={classes.codeAnimation}>
            <pre ref={preRef}>
                {displayedText}
                <span className={classes.cursor}>|</span>
            </pre>
        </div>
    );
};

export default CodeAnimation;
