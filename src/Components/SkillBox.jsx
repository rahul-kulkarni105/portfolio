import React from 'react';
import {
  string,
  any,
} from 'prop-types'
import {
  Box,
  Text,
} from 'grommet'

export const SkillBox = ({
  children = null,
  langText = '',
  customSkillsBoxClass = '',
  customSkillsTextClass = '',
  skillDocsUrl = ''
}) => (
  <a
    href={skillDocsUrl}
    target="_blank"
    rel="noopener noreferrer"
    className={`skills-wrapper__link p-2 grow ${customSkillsBoxClass}`}
  >
    {
      children
      && (
      <Box
        className={`skills-wrapper__box pt-3 ${customSkillsBoxClass}`}
      >
        {children}
        <Text
          className={`skills-wrapper__text pt-4 p-2 text-center ${customSkillsTextClass}`}
        >
          {langText}
        </Text>
      </Box>
      )
    }
  </a>
);

SkillBox.propTypes = {
  children: any,
  langText: string,
}