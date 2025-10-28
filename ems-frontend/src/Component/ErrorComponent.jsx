import React from 'react';

class ErrorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorMessage message="Something went wrong in the UI." />;
    }
    return this.props.children;
  }
}

// export default ErrorComponent;
