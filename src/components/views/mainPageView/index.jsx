import React from 'react'
import SearchBar from './SearchBar'
import { useSearch } from '../../../hooks/useSearch'
import EnhancedTable, { rows, headCells } from '../../Table'

export const MainPageView = () => {
  const [hotels, search] = useSearch()

  return (
    <div id="MainPageView">
      <SearchBar onSearchSubmit={search} />
      <div
        style={{
          width: '50%',
        }}
      >
        <EnhancedTable
          title="users"
          rows={rows}
          headCells={headCells}
          rowsPerPageCount="10"
        />
      </div>
    </div>
  )
}
