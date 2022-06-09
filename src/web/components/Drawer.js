import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { X } from "react-bootstrap-icons";

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
		<div
			ref={elemRef}
			style={{
				width: "100vw",
				height: "100vh",
				position: "fixed",
				transform: "translateX(-100%)",
				top: 0,
				left: 0,
				zIndex: 99999999999999999999,
			}}
		>
			<div
				ref={containerRef}
				style={{
					position: "relative",
					zIndex: 2,
					display: "inline-flex",
					transform: "translateX(-100%)",
				}}
			>
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
				style={{
					background: "rgba(0,0,0,0.2)",
					width: "100vw",
					height: "100vh",
					position: "absolute",
					top: 0,
					left: 0,
					zIndex: 0,
					opacity: 0,
				}}
			></div>
		</div>
	);
}
