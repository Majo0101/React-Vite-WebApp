const NextPage = (navigate, page, data) => {
      navigate(page, {
            state: {
                  data,
            },
      });
};

export default NextPage;
