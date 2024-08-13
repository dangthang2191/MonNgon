import { View, Text, SafeAreaView, ScrollView, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import storage from '../../storage/Storage'
import { STORAGEKEY } from '../../constant/constant'
import { BookMarkType } from '../../api/Type'
import ItemCategory from '../../components/ItemCategory'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { getAllBookMark } from '../../../redux/thunks/BookMarkThunks'

export default function BookMarkPage() {
    // const [listData, setListData] = useState<BookMarkType[]>([])
    // const getBookMarkData = async () => { 
    //     return await storage.load({key: STORAGEKEY.bookmark})
    // }
    // useEffect(() => {
    //     getBookMarkData().then((data) => {
    //         setListData(data)
    //     })
    // }, listData)
    const isRefesh = useAppSelector(state => state.bookMarkReducer.isRefesh);
    const dispath = useAppDispatch()
    const listBookMark = useAppSelector(state => state.bookMarkReducer.listBookMark)
    useEffect(() => {
        dispath(getAllBookMark())
    }, [listBookMark.length])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={{ paddingBottom: 56 }}
                refreshControl={
                    <RefreshControl
                        refreshing={isRefesh}
                        onRefresh={() => dispath(getAllBookMark())}
                    />
                }
            >
                {listBookMark.map((item, index) => <ItemCategory key={index} title={item.id} url={item.url} decs={item.title} />)}
            </ScrollView>
        </SafeAreaView>
    )
}