import React from "react";

import { Formik } from "formik";




function app() {

    return (
        <>

            <Formik

            >

                <form className="Agendamento-form">
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                        crossorigin="anonymous"
                    />
                    <header className="header">
                        <nav class="menubar navbar navbar-light justify-content-between">
                            <a href="navbar-brand">LOGO</a>
                            <form class="form-inline">
                                <a href="/index" class="menu-items">HOME</a>
                            </form>
                        </nav>
                    </header>
                    <div class="content">
                        <div class="form-background">
                            <center><h3><b>AGENDAMENTO DE CONSULTAS</b></h3></center>
                            <div style={{ color: "blue" }} />


                            <div class="form-style">
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="data">Data</label>
                                        <input type="date" class="form-control" id="data" placeholder="12/12/2012" name="data" required />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="hora">Hora</label>
                                        <input type="time" class="form-control" id="horario" placeholder="12:12" name="horario" required />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="especialidade">Especialidade</label>
                                    <input type="text" class="form-control" id="especialidade" placeholder="Especialidade" name="especialidade" required />
                                </div>



                                <div class="btn-form">
                                    <button type="submit" class="btn btn-clin" value="">Agendar</button>
                                    <button type="submit" class="btn btn-outline-secondary">Limpar</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>
            </Formik>
        </>



    );
}
export default app
