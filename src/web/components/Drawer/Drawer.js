import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { X } from "react-bootstrap-icons";
import styles from "./Drawer.module.css";

export default function Drawer({ open, children, onClose }) {
	const elemRef = useRef();
	const containerRef = useRef();
	const backgroundRef = useRef();
	useEffect(() => {
		const duration = 300 / 1000;
		if (open) {
			gsap.to(elemRef.current, { x: "0", duration: 0 });
			gsap.to(containerRef.current, { x: "0", duration });
			gsap.to(backgroundRef.current, { opacity: 1, duration });
		} else {
			gsap.to(containerRef.current, { x: "-100%", duration });
			gsap.to(elemRef.current, { x: "-100%", delay: duration, duration: 0 });
			gsap.to(backgroundRef.current, { opacity: 0, duration });
		}
	}, [open]);
	return (
		<div ref={elemRef} className={styles["main-container"]}>
			<div ref={containerRef} className={styles["content-container"]}>
				{children}
				<div
					onClick={onClose}
					style={{ alignSelf: "start", marginLeft: 10, cursor: "pointer" }}
				>
					<X color="white" size={30} />
				</div>
			</div>
			<div
				ref={backgroundRef}
				onClick={onClose}
				className={styles["black-bg"]}
			></div>
		</div>
	);
}