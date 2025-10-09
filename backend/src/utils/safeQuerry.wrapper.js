const safeQuery = async (promise) => {
  try {
    const data = await promise;
    return { data, error: null };
  } catch (error) {
    if (error instanceof Sequelize.ConnectionError) err.status = 500;
    else if (error instanceof Sequelize.DatabaseError) err.status = 500;
    else if (error instanceof Sequelize.ValidationError) err.status = 400;
    else if (error.name === "SequelizeUniqueConstraintError") err.status = 409;

    return { data: null, error };
  }
};

module.exports = {
  safeQuery,
};
