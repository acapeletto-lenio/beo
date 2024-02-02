module.exports = (async function () {
  const parsers = require("@parsers");

  const kpi = "ucii";
  const url =
    "https://infra.datos.gob.ar/catalog/sspm/dataset/31/distribution/31.3/download/utilizacion-capacidad-instalada-industria-valores-mensuales-base-2004.csv";
  const payload = await parsers.datosGobarCSV(0, 1, url);
  const post = {
    kpi,
    t: "UCII",
    st: "Utilización de la Capacidad Instalada en la Industria",
    sd: "El UCII es un indicador que mide el nivel de utilización de la capacidad productiva de las empresas manufactureras en Argentina. El nivel de utilización de la capacidad instalada también puede ser un indicador temprano de la actividad económica en general.",
    c: "<p>El UCII (Utilización de la Capacidad Instalada de la Industria) es un indicador que mide el nivel de utilización de la capacidad productiva de las empresas manufactureras en Argentina. Este indicador es elaborado y publicado mensualmente por el INDEC.</p><p>El UCII es un indicador importante porque refleja la capacidad productiva de la economía y su capacidad para satisfacer la demanda interna y externa de bienes manufacturados. Además, el nivel de utilización de la capacidad instalada también puede ser un indicador temprano de la actividad económica en general.</p><p>El UCII se calcula mediante una encuesta realizada a un conjunto de empresas manufactureras representativas en Argentina. En esta encuesta, se recopila información sobre la producción actual y la capacidad productiva disponible de las empresas. La capacidad productiva se define como la cantidad de producción que una empresa puede generar con sus instalaciones y equipos en condiciones normales de operación.</p><p>Con esta información, se calcula el nivel de utilización de la capacidad instalada, que se expresa como un porcentaje del total de capacidad productiva disponible. Por ejemplo, si la capacidad productiva total de una empresa es de 100 unidades y está produciendo 80 unidades, entonces su nivel de utilización de la capacidad instalada es del 80%.</p>",
    fd: "datos.gob.ar",
    fdr: "https:/.datos.gob.ar/dataset/sspm_31/archivo/sspm_31.3",
    fu: "INDEC",
    fur: "https://www.indec.gob.ar/indec/web/Nivel4-Tema-3-6-15",
    frec: parsers.detectDataType(payload),
    fruc: parsers.detectAggregationFunction(payload),
    u: new Date().toLocaleDateString("en-CA").split("/").join("-"),
    min: 0,
    max: 100,
    feat: true,
    d: "El indicador de la utilización de la capacidad instalada en la industria manufacturera mide la proporción utilizada, en términos porcentuales, de la capacidad productiva del sector industrial.",
    dimensions: [
      {
        label: "General",
        data: payload,
      },
      {
        label: "Alimentos",
        data: await parsers.datosGobarCSV(0, 2, url),
        color: "rgba(46,120,210,0.15)",
        borderWidth: 1,
      },
      {
        label: "Automotriz",
        data: await parsers.datosGobarCSV(0, 12, url),
        color: "rgba(46,120,210,0.15)",
        borderWidth: 1,
      },
      {
        label: "Edicion",
        data: await parsers.datosGobarCSV(0, 6, url),
        color: "rgba(46,120,210,0.15)",
        borderWidth: 1,
      },
      {
        label: "Metales",
        data: await parsers.datosGobarCSV(0, 11, url),
        color: "rgba(46,120,210,0.15)",
        borderWidth: 1,
      },
      {
        label: "Metalmecanica",
        data: await parsers.datosGobarCSV(0, 13, url),
        color: "rgba(46,120,210,0.15)",
        borderWidth: 1,
      },
      {
        label: "Minerales",
        data: await parsers.datosGobarCSV(0, 10, url),
        color: "rgba(46,120,210,0.15)",
        borderWidth: 1,
      },
      {
        label: "Papel",
        data: await parsers.datosGobarCSV(0, 5, url),
        color: "rgba(46,120,210,0.15)",
        borderWidth: 1,
      },
      {
        label: "Petroleo",
        data: await parsers.datosGobarCSV(0, 7, url),
        color: "rgba(46,120,210,0.15)",
        borderWidth: 1,
      },
      {
        label: "Plastico",
        data: await parsers.datosGobarCSV(0, 9, url),
        color: "rgba(46,120,210,0.15)",
        borderWidth: 1,
      },
      {
        label: "Quimicos",
        data: await parsers.datosGobarCSV(0, 8, url),
        color: "rgba(46,120,210,0.15)",
        borderWidth: 1,
      },
      {
        label: "Tabaco",
        data: await parsers.datosGobarCSV(0, 3, url),
        color: "rgba(46,120,210,0.15)",
        borderWidth: 1,
      },
      {
        label: "Textiles",
        data: await parsers.datosGobarCSV(0, 4, url),
        color: "rgba(46,120,210,0.15)",
        borderWidth: 1,
      },
    ],
  };

  parsers.writeFileSyncRecursive(`./static/data/${kpi}.json`, post);
})();
