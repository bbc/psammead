import moment from 'moment';
import './ps';

moment.locale('ps');

// This asset overrides the gunit assertion done in the moment codebase.
// Format and styling of this file has been keep consistent with the official moment tests.
// An example of these tests can be seen at https://github.com/moment/moment/blob/develop/src/test/locale/en-gb.js
const assert = { equal: (val1, val2) => expect(val1).toEqual(val2) };

test('format', function () {
    var a = [
            ['MMMM Do YYYY, h:mm:ss',              'فبروري ۱۴ ۲۰۱۰، ۳:۲۵:۵۰'],
            ['M Mo MM MMMM MMM',                   '۲ ۲ ۰۲ فبروري فبروري'],
            ['L',                                  '۰۲/۱۴/۲۰۱۰'],
            ['LL',                                 '۲۵ سلواغه ۱۳۸۸ - فبروري ۱۴، ۲۰۱۰'],
            ['LLL',                                'فبروري ۱۴، ۲۰۱۰ ۳:۲۵ ماسپښین'],
            ['D MMMM YYYY',                        '۲۵ سلواغه ۱۳۸۸ - ۱۴ فبروري ۲۰۱۰'],
        ],
        b = moment(new Date(2010, 1, 14, 15, 25, 50, 125)),
        i;
    for (i = 0; i < a.length; i++) {
        assert.equal(b.format(a[i][0]), a[i][1], a[i][0] + ' ---> ' + a[i][1]);
    }
});
