class Seed extends Component {
    render() {
      return (
        <div className="Seed">
          
        </div>
      );
    }
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  }