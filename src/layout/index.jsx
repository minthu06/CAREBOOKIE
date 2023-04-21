import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
// import Header from '../components/header/Navbar';
import logo from '../assets/image/logo_1.png'
import logo_svg from '../assets/svg/logo.svg'
import classNames from 'classnames';
import { Avatar, Breadcrumb, Collapse, Dropdown, Layout, Menu, Popover, theme } from 'antd';
import list from '../components/header/menu/menu'
import avatar from '../assets/image/background_login.png'
const { Header, Content, Footer, Sider } = Layout;

const Index = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [open, setOpen] = useState(false);

    const navigate = useNavigate()

    const handleOpenChange = (flag) => {
        setOpen(flag);
    };

    return (
        <main>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider className='!bg-white border-r z-10' width={280} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>

                    <div className={classNames('flex items-center bg-white w-[279px] border-b py-6 z-30 fixed justify-center h-fit',
                        {
                            'w-[279px]': !collapsed,
                            '!w-20': collapsed
                        })}
                        style={{ padding: 16 }} >
                        <button className=' text-white h-14 '>
                            {!collapsed ?
                                <img src={logo} width={200} />
                                : <img src={logo_svg} width={200} />
                            }
                        </button>
                    </div>

                    <Menu
                        className={classNames('!text-base fixed  !bg-white top-24 ',
                            {
                                '!w-[279px]': !collapsed,
                                '!w-20': collapsed
                            })}
                        defaultSelectedKeys={['1']} mode="inline" items={list}
                        onClick={((key) => {
                            navigate(key.keyPath[0])
                        })} />
                </Sider>
                <Layout>
                    <Header style={{ background: 'white' }}
                        className={classNames('flex justify-end z-10 !h-[5.5rem] border-b fixed w-[calc(100%-280px)] right-0',
                            {
                                'w-[calc(100%-280px)]': !collapsed,
                                'w-[calc(100%-79px)]': collapsed
                            })}>
                        <div className='flex items-center my-4'>
                            <Dropdown
                                menu={{
                                    items: [
                                        {
                                            label: <a href='/myprofile'>Thông tin cá nhân</a>,
                                            key: '1',
                                        },
                                        {
                                            label: <a href='/login'>Đăng xuất</a>,
                                            key: '2',
                                        },
                                    ],
                                }}
                                onOpenChange={handleOpenChange}
                                open={open}
                            >
                                <a className='flex items-center hover:cursor-pointer' onClick={(e) => e.preventDefault()}>
                                    <div className='mx-4'>
                                        <p className="font-bold text-black text-lg ">Minh Thư Nguyễn</p>
                                    </div>
                                    <Avatar className='shadow-lg' src={avatar} size={50} />
                                </a>
                            </Dropdown>
                        </div>
                    </Header>
                    <Content style={{ margin: '0 16px' }}  >
                        <div style={{ padding: 24, minHeight: 360 }} className="mt-24" >
                            {children}
                        </div>
                    </Content>

                </Layout>
            </Layout>
        </main >

    )
}

export default Index
