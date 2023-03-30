import * as XLSX from 'xlsx';

function ExportExcel({ children, id, name, data, buttonName, className, fileName = 'records', disable }) {
  const ExportCustonExcel = (data, filename, sheetname) => {
    const workBook = XLSX.utils.book_new();
    const workSheet = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(workBook, workSheet, sheetname);
    XLSX.writeFile(workBook, filename + '.xlsx');
  };

  return (
    <>
      <button
        name={name}
        id={id}
        className={className}
        onClick={() => ExportCustonExcel(data, fileName, fileName)}
        disabled={disable}
      >
        {children}
        {buttonName}
      </button>
    </>
  );
}

export default ExportExcel;
