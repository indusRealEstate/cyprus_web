import BrochureDownload from "@/components/dialog/brochureDownload"
import { Tooltip } from "@mui/material"
import React, { useEffect, useState } from "react"

const PropertyHeader = ({ id, data }) => {
	// const data = listings.filter((elm) => elm.id == id)[0] || listings[0];
	const copy = (url) => {
		const el = document.createElement("input")
		el.value = url
		el.id = "url-input"
		document.body.appendChild(el)
		el.select()
		document.execCommand("copy")
		el.remove()
	}

	const openPrinter = () => {
		var content = document.getElementById("divcontents")
		var pri = document.getElementById("ifmcontentstoprint").contentWindow
		pri.document.open()
		pri.document.write(content.innerHTML)
		pri.document.close()
		pri.focus()
		pri.print()
	}

	const [open, setOpen] = useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = (response) => {
		setOpen(false)
	}

	const dialogFunctions = {
		handleClose,
	}

	useEffect(() => {}, [open])

	return (
		<>
			<div className='col-lg-8'>
				<div className='single-property-content mb30-md'>
					<h2 className='sp-lg-title'>{`${data.property}`}</h2>
					<div className='pd-meta mb15 d-md-flex align-items-center'>
						<p className='text fz15 mb-0 bdrr1 pr10 bdrrn-sm'>
							{data.location}
						</p>
					</div>
					<div className='property-meta d-flex align-items-center'>
						<a
							className='ff-heading text-thm fz15 bdrr1 pr10 bdrrn-sm fw-bolder fs-6'
							style={{
								textTransform: "uppercase",
								color: "#009f73",
							}}
							href='#'>
							<i className='fas fa-circle pe-2' />
							For {data.unit_purpose == "rent" ? "Rent" : "Sale"}
						</a>
						{/* <a
              className="ff-heading bdrr1 fz15 pr10 ml10 ml0-sm bdrrn-sm"
              href="#"
            >
              <i className="far fa-clock pe-2" />
              {Number(new Date().getFullYear()) - Number(data.year_built)} years
              ago
            </a>
            <a className="ff-heading ml10 ml0-sm fz15" href="#">
              <i className="flaticon-fullscreen pe-2 align-text-top" />
              8721
            </a> */}
					</div>
				</div>
			</div>
			{/* End .col-lg--8 */}

			<div className='col-lg-4'>
				<div className='single-property-content'>
					<div className='property-action text-lg-end'>
						<div className='d-flex mb20 mb10-md align-items-center justify-content-lg-end'>
							<iframe
								id='ifmcontentstoprint'
								style={{
									height: "0",
									width: "0",
									position: "absolute",
								}}></iframe>
							{/* <a className="icon mr10" href="#">
                <span className="flaticon-like" />
              </a> */}
							<Tooltip title='Open In New Tab'>
								<a
									className='icon mr10'
									href={`/property-details?id=${id}`}
									target='_blank'>
									<span className='flaticon-new-tab' />
								</a>
							</Tooltip>
							<Tooltip title='Copy The Link'>
								<div
									onClick={() =>
										copy(`https://premium-realtor/property-details?id=${id}`)
									}
									className='icon mr10'
									style={{
										cursor: "pointer",
									}}>
									<span className='flaticon-share-1' />
								</div>
							</Tooltip>
							<Tooltip title='Print The Page'>
								<div
									onClick={() => openPrinter()}
									className='icon'
									style={{
										cursor: "pointer",
									}}>
									<span className='flaticon-printer' />
								</div>
							</Tooltip>
						</div>
						{/* <h3 className="price mb-0">{formatter.format(data.price)}</h3> */}
						<p className='text space fz15'>{data.total_area} Sq M</p>
						<button
							type='button'
							onClick={(event) => handleClickOpen()}
							className='ud-btn btn-transparent mr30 mr0-xs mobile-btn my-5'>
							DOWNLOAD BROCHURE
						</button>
						{open ? (
							<BrochureDownload
								type={`${data.property}`}
								open={open}
								dialogFunctions={dialogFunctions}
								route={`https://premium-realtor.com/api/media/listings/${id}/attachments/${
									JSON.parse(data.attachments)[0]
								}`}
							/>
						) : (
							<></>
						)}
						{/* <a
              className="ud-btn btn-thm mb-3"
              href={`https://premium-realtor.com/api/media/listings/${id}/attachments/${
                JSON.parse(data.attachments)[0]
              }`}
            >
              DOWNLOAD BROCHURE
            </a> */}
					</div>
				</div>
			</div>
			{/* End .col-lg--4 */}
		</>
	)
}

export default PropertyHeader
