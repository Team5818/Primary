/**
 * Fixes tables from markdown output for bootstrap CSS.
 */
function markstrap() {
    const tables = $("#content").find("table");
    tables.addClass("table table-bordered table-striped table-primary")
        .wrap('<div class="table-responsive"></div>');
    tables.find("code").addClass("d-inline-block")
}

$(markstrap);
