import React, { Component } from 'react';
import OrderItem from '../OrderItem';

const data = [
    {
        id: 1,
        shop: "creative cuisine",
        picure: "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=百香果&step_word=&hs=0&pn=1&spn=0&di=14740&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=1802774727%2C3513388494&os=524815752%2C196665772&simid=3357776282%2C354230669&adpicid=0&lpn=0&ln=1162&fr=&fmq=1630114532830_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%3A%2F%2Fimg.yweidao.com%2F2017%2F06%2F2%2Fgoods_pc_image%2F1496373023536v8mlobywfz_600x600.jpg%26refer%3Dhttp%3A%2F%2Fimg.yweidao.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1632706665%26t%3D33244d13b7fb295f218b890fd1aeca64&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Byojt1w5_z%26e3Bv54AzdH3F2551fWjkAzdH3F1jpwts%3F2551fI1%3Dn0bda&gsm=2&rpstart=0&rpnum=0&islist=&querylist=&nojc=undefined",
        product: "passion fruit",
        price: 19.9,
        ifCommented: true,
    },
    {
        id: 2,
        shop: "creative cuisine",
        picure: "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=百香果&step_word=&hs=0&pn=1&spn=0&di=14740&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=1802774727%2C3513388494&os=524815752%2C196665772&simid=3357776282%2C354230669&adpicid=0&lpn=0&ln=1162&fr=&fmq=1630114532830_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%3A%2F%2Fimg.yweidao.com%2F2017%2F06%2F2%2Fgoods_pc_image%2F1496373023536v8mlobywfz_600x600.jpg%26refer%3Dhttp%3A%2F%2Fimg.yweidao.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1632706665%26t%3D33244d13b7fb295f218b890fd1aeca64&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Byojt1w5_z%26e3Bv54AzdH3F2551fWjkAzdH3F1jpwts%3F2551fI1%3Dn0bda&gsm=2&rpstart=0&rpnum=0&islist=&querylist=&nojc=undefined",
        product: "passion fruit",
        price: 19.9,
        ifCommented: true,
        },
    {
        id: 3,
        shop: "creative cuisine",
        picure: "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=百香果&step_word=&hs=0&pn=1&spn=0&di=14740&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=1802774727%2C3513388494&os=524815752%2C196665772&simid=3357776282%2C354230669&adpicid=0&lpn=0&ln=1162&fr=&fmq=1630114532830_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%3A%2F%2Fimg.yweidao.com%2F2017%2F06%2F2%2Fgoods_pc_image%2F1496373023536v8mlobywfz_600x600.jpg%26refer%3Dhttp%3A%2F%2Fimg.yweidao.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1632706665%26t%3D33244d13b7fb295f218b890fd1aeca64&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Byojt1w5_z%26e3Bv54AzdH3F2551fWjkAzdH3F1jpwts%3F2551fI1%3Dn0bda&gsm=2&rpstart=0&rpnum=0&islist=&querylist=&nojc=undefined",
        product: "passion fruit",
        price: 19.9,
        ifCommented: true,
    },
    {
        id: 4,
        shop: "creative cuisine",
        picure: "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=百香果&step_word=&hs=0&pn=1&spn=0&di=14740&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=1802774727%2C3513388494&os=524815752%2C196665772&simid=3357776282%2C354230669&adpicid=0&lpn=0&ln=1162&fr=&fmq=1630114532830_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%3A%2F%2Fimg.yweidao.com%2F2017%2F06%2F2%2Fgoods_pc_image%2F1496373023536v8mlobywfz_600x600.jpg%26refer%3Dhttp%3A%2F%2Fimg.yweidao.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1632706665%26t%3D33244d13b7fb295f218b890fd1aeca64&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Byojt1w5_z%26e3Bv54AzdH3F2551fWjkAzdH3F1jpwts%3F2551fI1%3Dn0bda&gsm=2&rpstart=0&rpnum=0&islist=&querylist=&nojc=undefined",
        product: "passion fruit",
        price: 19.9,
        ifCommented: true,
    }

]
    

class OrderList extends Component {
    render() {
        return (
            <div>
                {
                    data.map(item => {
                        return <OrderItem key = {item.id} data={item}/>
                    })
                }               
            </div>
        );
    }
}

export default OrderList;