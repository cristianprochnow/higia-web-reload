"use client";

import styled from "styled-components";

import { css } from "@/global/styles";

export const MainButton = styled.button`
  border: 0;
  border-radius: .8rem;
  height: 4.8rem;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-lighter);
  background: ${css.linearGradient};
  transition: .3s all;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;
  grid-area: c;

  &:hover {
    opacity: .8;
  }
`;