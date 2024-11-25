import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemsActions } from '../store/ItemSlice'
import { fetchStatusActions } from '../store/fetchStatusSlice'

export default function FetchItems() {
  const fetchStatus = useSelector(store => store.fetchStatus)
  const dispatch = useDispatch()

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusActions.markFetchingStarted());
    fetch('http://localhost:8080/items', { signal })
      .then(res => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone())
        dispatch(fetchStatusActions.markfetchingFinished())
        dispatch(itemsActions.addInitialItem(items[0]))
      });

    return () => {
      controller.abort();
    }
  }, [fetchStatus])


  return (
    <>
    </>
  )
}
