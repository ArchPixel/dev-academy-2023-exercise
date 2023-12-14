import * as DataImportService from "../../services/DataImportService.js";

const showMain = async ({ render }) => {
  const someEntries = await DataImportService.getSomeDBEntries();

  const data = {
    someTopEntries: someEntries,
  };

  render("main.eta", data);
};

export { showMain };
