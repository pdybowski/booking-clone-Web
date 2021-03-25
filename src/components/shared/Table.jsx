import React, { useState, useEffect } from 'react'
import { DataGrid, GridOverlay } from '@material-ui/data-grid'
import LinearProgress from '@material-ui/core/LinearProgress'

function CustomLoadingOverlay() {
  return (
    <GridOverlay>
      <div style={{ position: 'absolute', top: 0, width: '100%' }}>
        <LinearProgress />
      </div>
    </GridOverlay>
  )
}

export function Table({
  rows,
  columns,
  height,
  width,
  setSelectedRows,
  pageSize,
  loading,
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
        components={{
          LoadingOverlay: CustomLoadingOverlay,
        }}
        selectionModel={selectionModel}
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        loading={loading}
      />
    </div>
  )
}
