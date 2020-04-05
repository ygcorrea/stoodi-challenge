import React, { useState, useEffect } from "react";
import { Grid, Button, Box } from "@material-ui/core";
import styled from "styled-components";

const AnswerGrid = styled(Grid)`
  span {
    font-weight: 700;
  }
  padding: 20px;
  line-height: 0.4em;
  align-items: center;
`;

const StyledButton = styled.button`
  display: inline-block;
  padding: 10px 30px;
  border: 1px solid transparent;
  border-radius: 40px;
  width: 220px;
  font-size: 1rem;
  font: inherit;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex: 1;
  align-items: center;
`;

const ButtonContainer = styled(Grid)`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const AnswerFeedback = ({ curValue, setResult, result, exercise, onReset }) => {
  const [sended, setSended] = useState(false);

  const onClickValidateButton = () => {
    if (curValue === undefined) return;
    const exec = {
      choice: curValue,
      exercise_id: exercise.exercise_id,
    };
    fetch("https://8zqqb4wng6.execute-api.us-east-1.amazonaws.com/dev/", {
      method: "POST",
      body: JSON.stringify(exec),
    })
      .then((res) => res.json())
      .then((result) => {
        setResult(result.is_correct);
        setSended(true);
      });
  };
  const feedbackStyles = {};

  const buttonStyles = {
    backgroundColor: "#3153f5",
  };

  if (curValue === undefined || curValue === null)
    buttonStyles.backgroundColor = "#dedede";

  if (result) feedbackStyles.backgroundColor = "#D4EFE4";
  if (!result && result !== null) feedbackStyles.backgroundColor = "#FEE0D9";

  return (
    <StyledBox style={feedbackStyles}>
      {result && (
        <AnswerGrid>
          <span>Resposta correta</span>
          <p>Boa! Acertou em cheio.</p>
        </AnswerGrid>
      )}
      {!result && result !== null && (
        <AnswerGrid>
          <span>Resposta incorreta</span>
          <p>Que tal tentar novamente?</p>
        </AnswerGrid>
      )}
      <ButtonContainer>
        {!sended && sended !== null && (
          <StyledButton
            style={buttonStyles}
            disabled={curValue === undefined || curValue === null}
            onClick={onClickValidateButton}
          >
            Verificar Resposta
          </StyledButton>
        )}

        {sended && (
          <StyledButton
            style={buttonStyles}
            disabled={curValue === undefined || curValue === null}
            onClick={() => {
              onReset();
              setSended(false);
            }}
          >
            {result ? "PRÓXIMA" : "REFAZER"}
          </StyledButton>
        )}
      </ButtonContainer>
    </StyledBox>
  );
};
export default AnswerFeedback;
