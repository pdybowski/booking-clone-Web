import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'

export function Table({
  rows,
  columns,
  height,
  width,
  setSelectedRows,
  pageSize,
}) {
  const [selectionModel, setSelectionModel] = useState([])
  useEffect(() => {
    setSelectedRows(selectionModel)
  }, [selectionModel])
  return (
    <div style={{ height, width }}>
      <DataGrid
        checkboxSelection
        onSelectionModelChange={(newSelection) => {
          setSelectionModel(newSelection.selectionModel)
        }}
        selectionModel={selectionModel}
        rows={rows}
        columns={columns}
        pageSize={pageSize}
      />
    </div>
  )
}
