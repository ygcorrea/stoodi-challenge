import React, { useState, useEffect } from "react";
import { Grid, Divider } from "@material-ui/core";
import styled from "styled-components";
import RadioOptions from "./radioOptions";
import AnswerFeedback from "./answerFeedback";

const GridStyled = styled(Grid)`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

const HeaderdGrid = styled(Grid)`
  background-color: #2694ae;
  width: 100vw;
  align-items: center;
  display: flex;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 1.1em;
  letter-spacing: 8px;
  font-size: 1.1em;
  letter-spacing: 8px;
  color: #fff;
  text-transform: uppercase;
  padding: 10px 0;
`;
const BoxGrid = styled(Grid)`
  width: 800px;
  height: 500px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 0px 15px 0px;
`;

const QuestionBox = styled(Grid)`
  p {
    line-height: 2.2;
    margin-bottom: 20px;
  }
`;
const Question = styled.div`
  i {
    display: block;
  }
`;


const Practice = () => {
  const [exercise, setExercise] = useState({});
  const [value, setValue] = useState();
  const [result, setResult] = useState(null);
  const [reset, setReset] = useState();

  const getExercise = () => {
    fetch("https://8zqqb4wng6.execute-api.us-east-1.amazonaws.com/dev/")
      .then(res => res.json())
      .then(result => {
        setExercise(result.exercise);
      });
  };

  useEffect(() => {
    getExercise();
  }, []);
  useEffect(() => {
    getExercise();
    setReset(null);
  }, [reset]);

  const onReset = () => {
    setValue(null);
    setResult(null);
    setExercise({});
    setReset(true);
  };

  return (
    <>
      <GridStyled
        container
        justify="space-evenly"
        alignItems="center"
        direction="column"
      >
        <HeaderdGrid>
          <Title>Exercícios</Title>
        </HeaderdGrid>
        <BoxGrid>
          <QuestionBox>
            <h2>{exercise.institution}</h2>
            <Question
              dangerouslySetInnerHTML={{ __html: exercise.exercise_text }}
            ></Question>
            {exercise.alternatives && (
              <RadioOptions
                alternatives={exercise.alternatives}
                setValue={setValue}
                result={result}
                value={value}
              />
            )}
          </QuestionBox>
          <Divider />
          <Grid>
            <AnswerFeedback
              curValue={value}
              exercise={exercise}
              result={result}
              setResult={setResult}
              onReset={onReset}
            />
          </Grid>
        </BoxGrid>
      </GridStyled>
    </>
  );
};
export default Practice;
