const containerRule =
  props => (
    { padding: '20px'
    , backgroundColor: 'teal'
    }
  );

const titleRule =
  props => (
    { lineHeight: 1.2
    , fontSize: props.fontSize
    , color: props.color
    }
  );


const mapStylesToProps =
  ({ fontSize, color }) => renderer => (
    { container: renderer.renderRule(containerRule)
    , title: renderer.renderRule(
        titleRule
      , { fontSize
        , color
        }
      )
    }
  );

export default mapStylesToProps;
