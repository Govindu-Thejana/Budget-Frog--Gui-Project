const useStyles = makeStyles({
    cancelButton: {
      backgroundColor: '#ccc',
    },
    saveButton: {
      backgroundColor: '#007bff',
      color: '#fff',
    },
  });
  
  const MyComponent = () => {
    const classes = useStyles();
  
    return (
      <div className="edit-budget-box">
        {/* ... */}
        <div className="button-group">
          <button type="button" className={classes.cancelButton}>
            CANCEL
          </button>
          <button type="submit" className={classes.saveButton}>
            SAVE
          </button>
        </div>
      </div>
    );
  };