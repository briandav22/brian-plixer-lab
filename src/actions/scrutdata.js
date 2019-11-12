export const getData = ({

    data ='hi'
  } = {}) => ({
    type: "UPDATE_JSON",
    scrut: {
      data:data
    }
  });