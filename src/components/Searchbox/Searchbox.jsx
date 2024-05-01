import PropTypes from 'prop-types';

import { Wrapper, Input, Icon, SearchForm, SearchButton, Container } from "./Searchbox.styled";

export const SearchBox = ({ value, onSubmit }) => {
  return (
    <Container>
      <Wrapper>
          <SearchForm onSubmit={onSubmit}>
            <Input
                type="text"
                name="query"
                defaultValue={value}
                placeholder="Search..."
              />
              <SearchButton type="submit">{<Icon />}</SearchButton>
          </SearchForm>
      </Wrapper>
    </Container>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};