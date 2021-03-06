import React, { useEffect, useState, useCallback } from 'react'
import { Table } from '../../shared/Table'
import { fetchData } from '../../../utils'
import CreateIcon from '@material-ui/icons/Create'
import IconButton from '@material-ui/core/IconButton'
import EditHotel from './EditHotel'
import LoadingIcon from '../../shared/LoadingIcon'
import useNotification from '../../../hooks/useNotification'

const hotelsColumns = (onClick) => [
  {
    field: 'action',
    headerName: 'Action',
    width: 100,
    renderCell: () => {
      return (
        <IconButton aria-label="edit" onClick={onClick}>
          <CreateIcon />
        </IconButton>
      )
    },
  },
  { field: 'hotelName', headerName: 'Hotel Name', width: 200 },
  { field: 'roomsCount', headerName: 'Rooms Count', width: 140 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'phoneNumber', headerName: 'Phone Number', width: 200 },
  { field: 'adress', headerName: 'Adress', width: 200 },
  { field: 'createdAt', headerName: 'Created At', width: 200 },
  { field: 'updatedAt', headerName: 'Updated At', width: 200 },
]

const ShowAll = () => {
  const { openNotification } = useNotification()

  const [isLoading, setIsLoading] = useState(true)
  const [isTable, setIsTable] = useState(true)
  const [hotels, setHotels] = useState([])
  const [selectedRows, setSelectedRows] = useState([])
  const [pending, setPending] = useState({
    state: false,
    type: 'tablePending',
  })

  const getDate = (date) => {
    const notFormatted = new Date(date).toString()
    return notFormatted.slice(0, 15)
  }

  const handleEditOnClick = useCallback(() => {
    setTimeout(() => {
      setIsTable(false)
    }, 20)
  }, [])

  const formatHotels = (data) => {
    return data.map(
      ({
        _id,
        name,
        rooms,
        email,
        phoneNumber,
        localization,
        createdAt,
        updatedAt,
      }) => {
        return {
          id: _id,
          hotelName: name,
          roomsCount: rooms.length,
          email,
          phoneNumber,
          adress: `${localization.city} ${localization.street} ${localization.buildingNumber}`,
          createdAt: getDate(createdAt),
          updatedAt: getDate(updatedAt),
        }
      }
    )
  }

  const getHotels = async () => {
    setPending({ state: true, type: 'tablePending' })
    try {
      const hotels = await fetchData(
        global.API_BASE_URL + 'api/hotelOwner/hotels',
        'GET'
      )
      setHotels(formatHotels(hotels))
      setPending({ state: false, type: 'tablePending' })
      setIsLoading(false)
    } catch (ex) {
      openNotification('Something went wrong', 'error')
      setIsLoading(false)
      setPending({ state: false, type: 'tablePending' })
    }
  }

  useEffect(() => {
    getHotels()
  }, [])

  return (
    <div style={{ height: 'auto', position: 'relative' }}>
      {isLoading ? (
        <LoadingIcon style={{ position: 'absolute', top: '25vh' }} />
      ) : (
        <>
          {isTable ? (
            <div className="hotel-owner-table">
              <Table
                rows={hotels}
                columns={hotelsColumns(handleEditOnClick)}
                height="100%"
                width="100%"
                pageSize={6}
                checkboxSelection={false}
                loading={pending}
                setSelectedRows={setSelectedRows}
                selectedRows={selectedRows}
              />
            </div>
          ) : (
            <EditHotel id={selectedRows} setIsTable={setIsTable} />
          )}
        </>
      )}
    </div>
  )
}

export default ShowAll
