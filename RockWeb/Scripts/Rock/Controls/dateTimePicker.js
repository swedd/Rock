﻿(function ($) {
    'use strict';
    window.Rock = window.Rock || {};
    Rock.controls = Rock.controls || {};

    Rock.controls.dateTimePicker = (function () {
        var exports = {
            initialize: function (options) {
                if (!options.id) {
                    throw 'id is required';
                }
                var dateFormat = 'mm/dd/yyyy';
                if (options.format) {
                    dateFormat = options.format;
                }

                var $dp = $('#' + options.id + " .js-datetime-date");

                // uses https://github.com/eternicode/bootstrap-datepicker
                $dp.datepicker({
                    format: dateFormat,
                    autoclose: true,
                    todayBtn: true,
                    startView: options.startView || 'month'
                });
                
                var $tp = $('#' + options.id + " .js-datetime-time");
                if ($tp) {
                    var $tpid = $tp.attr('id');
                    if ($tpid) {
                        Rock.controls.timePicker.initialize({
                            id: $tpid
                        });
                    }
                }

                var $dateTimePickerContainer = $dp.closest('.js-datetime-picker-container');
                
                $dateTimePickerContainer.find('.js-current-datetime-checkbox').on('click', function (a, b, c) {
                    var $dateTimeOffsetBox = $dateTimePickerContainer.find('.js-current-datetime-offset');
                    var $dateOffsetlabel = $("label[for='" + $dateTimeOffsetBox.attr('id') + "']")
                    if ($(this).is(':checked')) {
                        $dateOffsetlabel.removeClass('aspNetDisabled');
                        $dateTimeOffsetBox.prop('disabled', false);
                        $dateTimeOffsetBox.removeClass('aspNetDisabled');
                        $dp.val('');
                        $dp.prop('disabled', true);
                        $dp.addClass('aspNetDisabled');
                        $tp.val('');
                        $tp.prop('disabled', true);
                        $tp.addClass('aspNetDisabled');
                    } else {
                        $dateOffsetlabel.addClass('aspNetDisabled');
                        $dateTimeOffsetBox.prop('disabled', true);
                        $dateTimeOffsetBox.addClass('aspNetDisabled');
                        $dateTimeOffsetBox.val('');
                        $dp.prop('disabled', false);
                        $dp.removeClass('aspNetDisabled');
                        $tp.prop('disabled', false);
                        $tp.removeClass('aspNetDisabled');
                    }
                });
            }
        };

        return exports;
    }());
}(jQuery));