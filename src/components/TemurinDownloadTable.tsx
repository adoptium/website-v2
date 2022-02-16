import * as React from "react"
import { FaDownload } from 'react-icons/fa';
import { capitalize } from '../util/capitalize';

const TemurinDownloadTable = ({results}) => {
    console.log(results)

    return (
        <table id="download-table" className="table table-bordered releases-table" style={{borderSpacing: '0 10px', borderCollapse: 'separate'}}>
            <tbody className="table-light">
            {results ? (
                results.map(
                    (pkg, i): string | JSX.Element =>
                        pkg && (
                            <tr key={pkg.platform_name}>
                                <td className="table-secondary py-4 align-middle w-25">
                                    <span className="text-white">{pkg.release_name}</span>
                                    <span className="text-white d-block">Temurin</span>
                                </td>
                                <td className="align-middle w-20">{capitalize(pkg.os)}</td>
                                <td className="align-middle w-20">{pkg.architecture}</td>
                                <td className="align-middle">
                                    <table className="table parent mb-0 w-auto">
                                        <tbody className="table-light">
                                        {pkg.binaries.map(
                                            (binary, i): string | JSX.Element =>
                                                binary && (
                                                    <>
                                                    {binary.installer_link && (
                                                        <tr key={binary.installer_checksum}>
                                                            <td className="align-middle text-center">
                                                                <tr>
                                                                    <td>
                                                                        <a href="" data-bs-toggle="modal" data-bs-target="#checksumModal" data-bs-checksum={binary.installer_checksum}>Checksum (SHA256)</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        {`${binary.type} - ${binary.installer_size} MB`}
                                                                    </td>
                                                                </tr>
                                                            </td>
                                                            <td className="align-middle">
                                                                <a href={`/download?link=${binary.installer_link}`} className="btn btn-primary" style={{width: "6em"}}>
                                                                    <FaDownload /> {binary.installer_extension}
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    )}
                                                <tr key={binary.checksum}>
                                                    <td className="align-middle text-center">
                                                        <tr>
                                                            <td>
                                                                <a href="" data-bs-toggle="modal" data-bs-target="#checksumModal" data-bs-checksum={binary.checksum}>Checksum (SHA256)</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {`${binary.type} - ${binary.size} MB`}
                                                            </td>
                                                        </tr>
                                                    </td>
                                                    <td className="align-middle">
                                                        <a href={`/download?link=${binary.link}`} className="btn btn-primary" style={{width: "6em"}}>
                                                            <FaDownload /> {binary.extension}
                                                        </a>
                                                    </td>
                                                </tr>
                                                </>
                                            )
                                        )}
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        )
                )
            ) :
                <tr></tr>
            }
            </tbody>
        </table>
    );
};

export default TemurinDownloadTable;