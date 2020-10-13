import React from 'react';
import { IconContainer, SearchBarContainer, SearchBarInput } from './search-bar.styles';
import { Feather } from '@expo/vector-icons';

export interface SearchBarProps {
  term?: string;
  onTermChange: (term: string) => void;
  onTermSubmit: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onTermChange, term, onTermSubmit }) => {
  return (
    <SearchBarContainer>
      <IconContainer>
        <Feather name="search" size={30} color="black" />
      </IconContainer>
      <SearchBarInput
        placeholder="Search"
        autoCorrect={false}
        autoCapitalize="none"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </SearchBarContainer>
  );
};

SearchBar.defaultProps = {
  term: ''
};

export default React.memo(SearchBar);
