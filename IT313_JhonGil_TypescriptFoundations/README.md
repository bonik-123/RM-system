# IT313 TypeScript Foundations

## Problem

This project is a TypeScript version of the IT313 Enrollment Eligibility Checker.

The program calculates the average of each student's prelim, midterm, and final grades and determines whether the student is PASSING or on PROBATION.

Students with an average of 75 or higher are passing.

## TypeScript Concepts Used

- Basic type annotations
- Interfaces
- Type aliases
- Enums
- Union types
- Optional properties
- Generics
- Array methods
- Promises
- Async/await
- ES modules

## Files

- main.ts - Main enrollment eligibility program
- gradeUtils.ts - Grade calculation and status functions
- tsconfig.json - TypeScript configuration

## How to Run

Install dependencies:

npm install

Run the program:

npx tsx main.ts

Check for TypeScript errors:

npx tsc --noEmit

The program should finish with zero type errors.