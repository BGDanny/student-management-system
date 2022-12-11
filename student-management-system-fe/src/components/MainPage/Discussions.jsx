import React from "react";
import "./Discussions.css";
import { useAlertContext } from "../../context/AlertContext";
import { useEffect, useState } from "react";
import {
    InputGroup,
    Input,
    InputLeftElement,
    Heading,
    Text,
    TableContainer,
    Table,
    Thead,
    Tbody,
    Tr,
    Td,
    Th,
} from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";
import axios from "axios";

export const Discussions = () => {
    const [fetchedData, setFetchedData] = useState([]);
    const [fetchedSingleData, setFetchedSingleData] = useState([]);
    const [postShow, setPostShow] = useState(false);
    const [boardShow, setBoardShow] = useState(true);
    const [createShow, setCreateShow] = useState(false);
<<<<<<< Updated upstream
    const [show, setShow] = useState(false);
=======
    const { sendAlert } = useAlertContext();
>>>>>>> Stashed changes
    let length;

    useEffect(() => {
        fetchProducts();
        const interval = setInterval(() => {
            fetchProducts();
        }, 3000)
        return()=>clearInterval(interval)
    }, []);

    let id = localStorage.getItem("id");

    const fetchProducts = async () => {
        const url = "http://localhost:5000/api/students/posts";
        axios
            .get(url)
            .then((res) => {
                console.log(res.data);
                setFetchedData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

        console.log("LOOK2");
        const url2 =
            "http://localhost:5000/api/students/posts/" +
            localStorage.getItem("currentPostId").toString();
        axios
            .get(url2)
            .then((res) => {
                console.log("LOOK" + res.data);
                setFetchedSingleData(res.data);
                setShow(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const putReply = async (reply, id) => {
        const url = "http://localhost:5000/api/students/replyPosts/" + id;
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: reply,
            }),
        });
        const data = await response.json();
        if (data) {
            sendAlert("reply added", "success");
        } else {
            sendAlert("reply failed", "error");
        }


    };

    const createPost = async (title, desc) => {
        const url = "http://localhost:5000/api/students/posts/";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                post_title: title,
                post_description: desc,
            }),
        });

        const data = await response.json();
        if (data) {
            sendAlert("post created", "success");
        } else {
            sendAlert("failed to post", "error");
        }
    };

    const handleClick = (event, title, id) => {
        event.preventDefault();
        localStorage.setItem("currentPostTitle", title);
        localStorage.setItem("currentPostId", id);
        fetchProducts();
        setPostShow(true);
        setBoardShow(false);
    };

    const handleReply = (event, reply, id) => {
        event.preventDefault();

        document.getElementById("replyField").value = "";

        putReply(reply, id);


        fetchProducts();
    };

    const handleCreateSubmit = (event, id) => {
        event.preventDefault();

        createPost(
            document.getElementById("titleField").value,
            document.getElementById("descField").value
        );

        setCreateShow(false);
        setBoardShow(true);

        fetchProducts();
    };

    function handleCreate(e) {
        e.preventDefault();
        setCreateShow(true);
        setBoardShow(false);
    }

    function handleBackout(e) {
        e.preventDefault();
        setCreateShow(false);
        setPostShow(false);
        setBoardShow(true);
    }

    console.log("data: ", fetchedSingleData);
    return (
        <>
            {boardShow && (
                <div>
                    <h2 className="account-header">Discussion Board</h2>
                    <br />
                    <div className="display-posts">
                        <button id="createButton" onClick={handleCreate}>
                            Create Post
                        </button>
                        <br />
                        <br />
                        <Table>
                            {fetchedData.map((post) => (
                                <Tbody>
                                    <Thead
                                        className="display-single-post-header-board"
                                        onClick={(event) =>
                                            handleClick(
                                                event,
                                                post.post_title,
                                                post._id
                                            )
                                        }
                                    >
                                        <Tr>
                                            <Th className="post">{post.post_title}</Th>
                                        </Tr>
                                    </Thead>

                                    <tr
                                        className="display-single-post-spacer"
                                        colSpan="2"
                                    ></tr>
                                </Tbody>
                            ))}
                        </Table>
                    </div>
                </div>
            )}
            {show && postShow && (
                <div>
                    <table>
                        <tr>
                            <td className="discussion-directory-clickable" onClick={handleBackout}>
                                <Heading size="1xl">
                                    Discussions
                                </Heading>
                            </td>
                            <td>
                                <Heading size="1xl">
                                    > {localStorage.getItem("currentPostTitle")}
                                </Heading>
                            </td>

                        </tr>
                    </table>

                    <br></br>
                    <h2 className="account-header">Post View</h2>
                    <Table className="display-posts">
                        <Tbody>
                            <div className="display-single-post">
                                <Thead className="display-single-post-header">
                                    <Tr>
                                        <Th>
                                            {fetchedSingleData.post.post_title}
                                        </Th>
                                    </Tr>
                                </Thead>
                                <Tr>
                                    <Th>
                                        {
                                            fetchedSingleData.post
                                                .post_description
                                        }
                                    </Th>
                                </Tr>
                            </div>
                            <tr
                                className="display-single-post-spacer"
                                colSpan="2"
                            ></tr>
                            <Tr className="display-single-post-replybox">
                                <div id="replyBox">
                                    <textarea
                                        type="text"
                                        id="replyField"
                                    ></textarea>
                                    <button
                                        id="replyButton"
                                        onClick={(event) =>
                                            handleReply(
                                                event,
                                                document.getElementById(
                                                    "replyField"
                                                ).value,
                                                fetchedSingleData.post._id
                                            )
                                        }
                                    >
                                        Reply
                                    </button>
                                </div>
                            </Tr>
                            <tr
                                className="display-single-post-spacer"
                                colSpan="2"
                            ></tr>
                            <Thead className="display-single-post-replies">
                                <Tr>
                                    <Th>Replies</Th>
                                </Tr>
                            </Thead>
                            {fetchedSingleData.post.replies.map((post) => (
                                <div>
                                    <div className="display-single-post">
                                        <Tr>
                                            <Th>{post}</Th>
                                        </Tr>
                                    </div>
                                    <tr
                                        className="display-single-post-spacer"
                                        colSpan="2"
                                    ></tr>
                                </div>
                            ))}
                        </Tbody>
                    </Table>
                </div>
            )}
            {createShow && (
                <div>
                    <table>
                        <tr>
                            <td className="discussion-directory-clickable" onClick={handleBackout}>
                                <Heading size="1xl">
                                    Discussions
                                </Heading>
                            </td>
                            <td>
                                <Heading size="1xl">
                                    > create
                                </Heading>
                            </td>

                        </tr>
                    </table>
                    <br></br>
                    <h2 className="account-header">Create Post</h2>
                    <br />
                    <Table>
                        <Tbody className="display-posts">
                            <tr>
                                <Th>Title</Th>
                            </tr>
                            <Tr className="display-single-post-replybox">
                                <input
                                    type="text"
                                    id="titleField"
                                ></input>
                            </Tr>
                            <br />
                            <tr>
                                <Th>Description</Th>
                            </tr>
                            <Tr className="display-single-post-replybox">
                                <textarea type="text" id="descField"></textarea>
                            </Tr>
                            <br />
                            <Tr className="display-single-post-replybox">
                                <button 
                                    id="createButton"
                                    onClick={handleCreateSubmit}
                                >
                                    Post
                                </button>
                            </Tr>

                            <tr
                                className="display-single-post-spacer"
                                colSpan="2"
                            ></tr>
                        </Tbody>
                    </Table>
                </div>
            )}
        </>
    );
};
