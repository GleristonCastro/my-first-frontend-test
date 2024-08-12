import { render } from "@testing-library/react";

import Button from ".";

describe('<Button>', () => {
  it('should render button', () => {
    const { getByText, getByRole } = render(<Button>button</Button>);

    const buttonElement = getByRole('button');
    const buttonTextElement = getByText('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonTextElement).toBeInTheDocument();
  });

  it(`should render 'Loading...' text when isLoading was passed`, () => {
    const { getByText } = render(<Button isLoading>button</Button>);

    const isLoadingText = getByText('Loading...');

    expect(isLoadingText).toBeInTheDocument();
  });

  // it(`should render the button with background color green by default`, () => {
  //   const { getByRole } = render(<Button isLoading>button</Button>);

  //   const buttonElement = getByRole('button');

  //   expect(buttonElement).toHaveStyle({
  //     backgroundcolor: 'green'
  //   });
  // });
});